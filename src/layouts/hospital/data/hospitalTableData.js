/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

const hospitalImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhdQu0h19z4DvCi74Fgul3jX3tNL6QqQYaqQwwoEu-Uz1oP-XKUopb7teZoLQjGI7HDp6XwXEPyE&usqp=CAU&ec=48665701";

function Hospital({ image, name, email }) {
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

const hospitalsData = {
  columns: [
    { name: "hospital", align: "left" },
    { name: "phone", align: "center" },
    { name: "state", align: "center" },
    { name: "wallet", align: "center" },
    { name: "date", align: "center" },
  ],

  rows: [
    {
      hospital: <Hospital image={hospitalImageUrl} name="GG hospital" email="gghospital@gmail.com" />,
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
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </ArgonTypography>
      ),
    },
    {
      hospital: <Hospital image={hospitalImageUrl} name="Medical College" email="gghospital@gmail.com" />,
      state: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          Karnataka
        </ArgonTypography>
      ),
      phone: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          9495637281
        </ArgonTypography>
      ),
      wallet: (
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          0xe99E8bD7eed9Aa2CDFc9c183b52ad5681E82cDed
        </ArgonTypography>
      ),
      date: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/23
        </ArgonTypography>
      ),
    },
  ],
};

export default hospitalsData;
