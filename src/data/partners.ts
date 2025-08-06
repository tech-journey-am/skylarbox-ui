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
    logo: "/images/partners/yba-jci-vietnam.png",
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
    id: 12,
    companyName: "JCI Da Nang",
    shortName: "JCI Da Nang",
    website: "https://thapsang.site",
    fanpage: "https://www.facebook.com/duanthapsang",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5600000,
      detail: "5.600.000",
    },
    package: "brozen",
    logo: "/images/partners/jci-da-nang.png",
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
    id: 1,
    companyName: "Nha khoa Văn Chương",
    shortName: "Nha khoa Văn Chương",
    website: "https://www.facebook.com/profile.php?id=100064456849180",
    fanpage: "https://www.facebook.com/pham.bich.ha.657698",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5600000,
      detail: "5.600.000",
    },
    package: "brozen",
    logo: "/images/partners/nha-khoa-van-chuong.jpeg",
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
    id: 2,
    companyName: "CÔNG TY TNHH NHẤN DECOR & INTERIOR",
    shortName: "Nhấn Decor by Lighting",
    website: "https://nhandecor.com/",
    fanpage: "https://www.facebook.com/Kho.Den.Cao.Cap",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5600000,
      detail: "5.600.000",
    },
    package: "brozen",
    logo: "/images/partners/nhan-decor-by-lighting.png",
    representative: {
      title: "Bà",
      name: "Trần Lương Khánh Diễm",
      position: "Phó giám đốc",
      dob: "26/02/1986",
      facebook: "https://www.facebook.com/diem.tran.417193",
      email: "diemtran860226@gmail.com",
      phone: "0962997403",
    },
  },
  {
    id: 3,
    companyName: "Nha khoa Xanh Dental",
    shortName: "Nha khoa Xanh Dental",
    website: "https://xanhdental.vn/",
    fanpage: "https://www.facebook.com/nhakhoa.xanhdental",
    sponsorship: {
      type: "Tiền mặt",
      amount: 30000000,
      detail: "30.000.000",
    },
    package: "diamond",
    logo: "/images/partners/xanh-dental.png",
    representative: {
      title: "Ông",
      name: "Nguyễn Anh Sơn",
      position: "Giám đốc chuyên môn",
      dob: "20/06/1978",
      facebook: "",
      email: "Xanhdental@gmail.com",
      phone: "0866777686 - chị Nhâm quản lý của anh Sơn",
    },
  },
  {
    id: 4,
    companyName: "Công ty TNHH TM&DV Bảo Trâm",
    shortName: "Công ty TNHH TM&DV Bảo Trâm",
    website:
      "https://baotramgalaxysolar.com.vn/?fbclid=IwY2xjawJyqmFleHRuA2FlbQIxMAABHkwqYIA9gCCL6nOXF4T4o6b6Gcn6ZlMlJoKiOaMqfpT9dnoEqHpAouRPvgh0_aem_qmma1PO3n_nF4jB4fePgHA",
    fanpage: "https://www.facebook.com/baotramgalaxysolar/",
    sponsorship: {
      type: "Tiền mặt (10tr)\n20 bộ đèn ốp trần 300W (15tr)\nship (5tr)",
      amount: 10000000,
      detail: "10.000.000",
    },
    package: "diamond",
    logo: "/images/partners/bao-tram-x-thap-sang.png",
    representative: {
      title: "Bà",
      name: "Lê Quỳnh Phương",
      position: "Tổng Giám Đốc",
      dob: "30/09",
      facebook: "",
      email: "",
      phone: "0984973666",
    },
  },
  {
    id: 5,
    companyName: "CÔNG TY CỔ PHẦN SÁNG KIẾN GIÁO DỤC TOÀN CẦU",
    shortName: "Gein Academy",
    website: "https://gein.edu.vn/",
    fanpage: "https://www.facebook.com/GEIN.Academy",
    sponsorship: {
      type: "Tiền mặt",
      amount: 40000000,
      detail: "40.000.000",
    },
    package: "diamond",
    logo: "/images/partners/gein-academy.png",
    representative: {
      title: "Bà",
      name: "Phương Nguyễn Silk",
      position: "SCCO",
      dob: "11/09/1987",
      facebook: "https://www.facebook.com/phuongnguyensilkvn",
      email: "Coachphuongsilk@gmail.com",
      phone: "0983580502",
    },
  },
  {
    id: 7,
    companyName: "CÔNG TY TNHH DOANH NGHIỆP XÃ HỘI TỐT HƠN MỖI NGÀY",
    shortName: "BBE - Be Better Everyday",
    website: "",
    fanpage: "https://www.facebook.com/BBEbebettereveryday",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5000000,
      detail: "5.000.000",
    },
    package: "brozen",
    logo: "/images/partners/bbe.png",
    representative: {
      title: "Bà",
      name: "Đặng Ngọc Thái Bình",
      position: "Giám đốc",
      dob: "17/07",
      facebook: "https://www.facebook.com/jes177",
      email: "",
      phone: "0818030679",
    },
  },
  {
    id: 8,
    companyName: "Thương hiệu Vigift",
    shortName: "Vigift",
    website:
      "https://vigift.vn/?srsltid=AfmBOopPDG9W13tLHU5tT28FPo8sOIfVvfW4fCLMd2tFl3YulIy-4H1T",
    fanpage: "https://www.facebook.com/dacsandananglamquavigift",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5000000,
      detail: "5.000.000",
    },
    package: "brozen",
    logo: "/images/partners/vigift.png",
    representative: {
      title: "Bà",
      name: "PHAN THANH HÀ",
      position: "Giám đốc",
      dob: "",
      facebook: "",
      email: "",
      phone: "",
    },
  },
  {
    id: 9,
    companyName: "CÔNG TY LUẬT TNHH KHOA TÍN",
    shortName: "Luật Khoa Tín",
    website: "http://khoatin.com.vn/",
    fanpage: "https://www.facebook.com/KhoaTinDaNang/",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5000000,
      detail: "5.000.000",
    },
    package: "brozen",
    logo: "/images/partners/luat-khoa-tin.png",
    representative: {
      title: "Bà",
      name: "Đỗ Khánh Linh",
      position: "Giám đốc",
      dob: "12/07/1994",
      facebook: "",
      email: "linhdtk@khoatin.com.vn",
      phone: "0985661789",
    },
  },
  {
    id: 10,
    companyName: "Công Ty TNHH Truyền Thông Brando",
    shortName: "Brando",
    website: "https://brando.vn/",
    fanpage: "https://www.facebook.com/brandocareers",
    sponsorship: {
      type: "Tiền mặt",
      amount: 5000000,
      detail: "5.000.000",
    },
    package: "brozen",
    logo: "/images/partners/brando.png",
    representative: {
      title: "Bà",
      name: "Hoàng Thúy Phượng",
      position: "Giám đốc",
      dob: "",
      facebook: "",
      email: "",
      phone: "",
    },
  },
];
