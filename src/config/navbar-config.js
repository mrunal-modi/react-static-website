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
        to: "/product/product-1" // match this to the keys in productsConfig e.g. product-1
      },
      {
        label: "Product2",
        to: "/product/product-2" // match this to the keys in productsConfig e.g. product-2
      }
    ]
  }
];
