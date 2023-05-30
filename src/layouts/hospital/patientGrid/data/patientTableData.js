/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonButton from "components/ArgonButton";

const patientImageUrl = "https://cdn-icons-png.flaticon.com/512/1430/1430453.png";

function NameAndEmail({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function ViewProfile() {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonButton color="dark" size="medium"  fullWidth>
        View Profile
      </ArgonButton>
    </ArgonBox>
  );
}

const hospitalsData = {
  columns: [
    { name: "name and email", align: "left" },
    { name: "phone", align: "center" },
    { name: "state", align: "center" },
    { name: "wallet", align: "center" },
    { name: "profile", align: "center" },
  ],

  rows: [
    {
      "name and email": (
        <NameAndEmail image={patientImageUrl} name="GG hospital" email="gghospital@gmail.com" />
      ),
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Kerala
        </ArgonTypography>
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          8894673328
        </ArgonTypography>
      ),
      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          0x37BaefDc23fd0ee801F2eBc40eecf0C3297faD26
        </ArgonTypography>
      ),
      profile: (
        <ViewProfile/>
      ),
    },
  ],
};

export default hospitalsData;
