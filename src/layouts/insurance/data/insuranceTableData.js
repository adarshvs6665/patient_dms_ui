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

const insuranceTableData = {
  columns: [
    { name: "insurance", align: "left" },
    { name: "phone", align: "center" },
    { name: "state", align: "center" },
    { name: "wallet", align: "center" },
    { name: "date", align: "left" },
  ],

  rows: [
    {
      insurance: (
        <Insurance
          image={insuranceCompanyImageUrl}
          name="Insurance Name"
          email="insurance@abccom"
        />
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9988776655
        </ArgonTypography>
      ),
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Kerala
        </ArgonTypography>
      ),

      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          0x37BaefDc23fd0ee801F2eBc40eecf0C3297faD26
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
    },
    {
      insurance: (
        <Insurance
          image={insuranceCompanyImageUrl}
          name="Insurance Name"
          email="insurance@abccom"
        />
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9988776655
        </ArgonTypography>
      ),
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Kerala
        </ArgonTypography>
      ),

      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          0x37BaefDc23fd0ee801F2eBc40eecf0C3297faD26
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
    },
    {
      insurance: (
        <Insurance
          image={insuranceCompanyImageUrl}
          name="Insurance Name"
          email="insurance@abccom"
        />
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9988776655
        </ArgonTypography>
      ),
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Kerala
        </ArgonTypography>
      ),

      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          0x37BaefDc23fd0ee801F2eBc40eecf0C3297faD26
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
    },
    {
      insurance: (
        <Insurance
          image={insuranceCompanyImageUrl}
          name="Insurance Name"
          email="insurance@abccom"
        />
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9988776655
        </ArgonTypography>
      ),
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Kerala
        </ArgonTypography>
      ),

      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          0x37BaefDc23fd0ee801F2eBc40eecf0C3297faD26
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
    },
    {
      insurance: (
        <Insurance
          image={insuranceCompanyImageUrl}
          name="Insurance Name"
          email="insurance@abccom"
        />
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9988776655
        </ArgonTypography>
      ),
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Kerala
        </ArgonTypography>
      ),

      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          0x37BaefDc23fd0ee801F2eBc40eecf0C3297faD26
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
    },
  ],
};

export default insuranceTableData;
