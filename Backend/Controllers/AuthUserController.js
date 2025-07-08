import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import User from "../Modals/AuthUserModal.js";

export const googleCallbackController = async (req, res) => {
  try {
    const code = req.query.code;

    if (!code) {
      return res.status(400).send("Authorization code is missing");
    }

    // Step 1: Exchange code for access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:5000/auth/google/callback", // Must match Google Console
        grant_type: "authorization_code",
      }),
    });

    const tokenData = await tokenResponse.json();
    console.log("🔁 Google Token Response:", tokenData); // Add this for debugging

    if (!tokenResponse.ok || !tokenData.access_token) {
      return res.status(400).json({
        message: "Failed to get access token from Google",
        error: tokenData,
      });
    }

    const accessToken = tokenData.access_token;

    // Step 2: Use access token to get user info
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const userData = await userInfoResponse.json();
    console.log("👤 Google User Info:", userData); // Add this for debugging

    const { name, email, picture } = userData;

    if (!email) {
      return res.status(400).json({ message: "Email not returned by Google" });
    }

    // Step 3: Find or create user in DB
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, picture });
    }

    // Step 4: Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Step 5: Set JWT in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // ✅ true in production (with HTTPS)
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Step 6: Redirect to frontend
    res.redirect("http://localhost:5173");
  } catch (err) {
    console.error(" Google Callback Error:", err.message);
    res.status(500).send("Google Login Failed");
  }
};

export const GetUserController = async (req, res) => {
  try {
    const userId = req.userId; // This should be set by JWT middleware

    if (!userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized. Token missing or invalid." });
    }

    const user = await User.findById(userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(" Error in GetUserController:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
