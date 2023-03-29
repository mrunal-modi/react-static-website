export const logo = "/images/logo.png";
export const brandName = "MyBrand";

export const nav = [
  {
    label: "Our Team",
    href: "/#team"
  },
  {
    label: "Contact Us",
    href: "/#contact-us"
  },
  {
    label: "About Us",
    to: "/about-us"
  },
  {
    label: "Products",
    dropdownItems: [
      {
        label: "Product1",
        to: "/product-1"
      },
      {
        label: "Product2",
        to: "/product-2"
      }
    ]
  }
];
