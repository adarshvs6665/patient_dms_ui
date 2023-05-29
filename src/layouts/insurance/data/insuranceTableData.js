/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function Insurance({ name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
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



const insuranceTableData = {
  columns: [
    { name: "Insurance", align: "left" },
    { name: "Address", align: "left" },
    { name: "State", align: "center" },
    { name: "Phone", align: "center" },
    { name: "Wallet", align: "center" },
  ],

  rows: [
    {
      Insurance: <Insurance name="Insurance Name" email="insurance@abccom" />,
      Address: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Address Sample
        </ArgonTypography>
      ),
      State: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
        Kerala
      </ArgonTypography>
      ),
      Phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9988776655
        </ArgonTypography>
      ),
      Wallet: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq
        </ArgonTypography>
      ),
    }
  ],
};

export default insuranceTableData;
