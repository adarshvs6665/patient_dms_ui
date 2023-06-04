/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

const insuranceCompanyImageUrl =
  "https://img.freepik.com/premium-vector/concept-vector-illustration-life-insurance-protection-health-life-flat-vector-illustration_98702-1374.jpg";

function Insurance({ image, name, email }) {
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

const insuranceTableData = (insurancesArray) => {
  const columns = [
    { name: "insurance", align: "left" },
    { name: "phone", align: "center" },
    { name: "state", align: "center" },
    { name: "wallet", align: "center" },
    { name: "date", align: "left" },
  ];

  const rows = insurancesArray.map((insurance, key) => {
    return {
      insurance: (
        <Insurance
          key={key}
          image={insuranceCompanyImageUrl}
          name={insurance.name}
          email="insurance@abccom"
        />
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          {insurance.mobile}
        </ArgonTypography>
      ),
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          {insurance.state}
        </ArgonTypography>
      ),

      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          {insurance.wallet}
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          {insurance.createdAt.substring(0, 10)}
        </ArgonTypography>
      ),
    };
  });

  return { columns, rows };
};

export default insuranceTableData;
