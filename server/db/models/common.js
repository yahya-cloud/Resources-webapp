export const commonFields = {
  photo: String,
  name: { type: String, required: true },
  coords: {
    lat: { type: String, required: true },
    long: { type: String, required: true },
  },
  userType: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
}
