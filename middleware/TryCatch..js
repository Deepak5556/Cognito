export const verifyUser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;
  
  console.log("Received OTP:", otp);
  console.log("Received Token:", activationToken);
  console.log("Activation Secret:", process.env.Activation_Secret);

  try {
    const verify = jwt.verify(activationToken, process.env.Activation_Secret);
    console.log("Decoded Token:", verify);

    // 🔥 Convert OTP to string before comparing
    if (String(verify.otp) !== String(otp)) {
      return res.status(400).json({ message: "Wrong OTP" });
    }

    // 🔥 Prevent duplicate user creation
    const existingUser = await User.findOne({ email: verify.user.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    // 🔥 Save user to database
    await User.create({
      name: verify.user.name,
      email: verify.user.email,
      password: verify.user.password,
    });

    return res.json({ message: "User Registered Successfully" });

  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(400).json({ message: "Invalid or Expired Token" });
  }
});
