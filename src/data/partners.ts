export interface Partner {
  id: number;
  companyName: string;
  shortName: string;
  website: string;
  fanpage: string;
  sponsorship: {
    type: string;
    amount: number;
    detail: string;
  };
  package: string;
  logo: string;
  representative: {
    title: string;
    name: string;
    position: string;
    dob: string;
    facebook: string;
    email: string;
    phone: string;
  };
}

export const partners: Partner[] = [
  {
    id: 1,
    companyName: "YBA - JCI Vietnam",
    shortName: "YBA - JCI Vietnam",
    website: "https://yba.jci.org.vn/",
    fanpage: "https://www.facebook.com/jci.vietnam",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5600000,
      detail: "5.600.000",
    },
    package: "brozen",
    logo: "/logo/logo_square.png",
    representative: {
      title: "Bà",
      name: "Phạm Bích Hà",
      position: "Bác sĩ",
      dob: "01/11/1968",
      facebook: "https://www.facebook.com/pham.bich.ha.657698",
      email: "",
      phone: "0914223776",
    },
  },
  {
    id: 11,
    companyName: "YBA - JCI Vietnam",
    shortName: "YBA - JCI Vietnam",
    website: "https://yba.jci.org.vn/",
    fanpage: "https://www.facebook.com/jci.vietnam",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5600000,
      detail: "5.600.000",
    },
    package: "brozen",
    logo: "/logo/logo_circle.png",
    representative: {
      title: "Bà",
      name: "Phạm Bích Hà",
      position: "Bác sĩ",
      dob: "01/11/1968",
      facebook: "https://www.facebook.com/pham.bich.ha.657698",
      email: "",
      phone: "0914223776",
    },
  },
];
