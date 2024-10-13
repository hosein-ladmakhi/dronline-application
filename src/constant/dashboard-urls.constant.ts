export const DASHBOARD_URLS = {
  dashboard: "/dashboard",
  users: "/users",
  admin_users: "/users/admin",
  doctor_users: "/users/doctor",
  patient_users: "/users/patient",
  categories: "/categories",
  locations: "/locations",
  schedules: "/schedules",
  days_off: "/daysoff",
  orders: "/orders",
  transactions: "/transactions",
  payments: "/payments",
  tickets: "/tickets",
} as const;

export const DASHBOARD_MENU_URLS = [
  {
    key: DASHBOARD_URLS.dashboard,
    label: "داشبورد",
  },
  {
    key: DASHBOARD_URLS.users,
    label: "کاربران",
    children: [
      {
        key: DASHBOARD_URLS.admin_users,
        label: "لیست ادمین ها",
      },
      {
        key: DASHBOARD_URLS.doctor_users,
        label: "لیست پزشکان",
      },
      {
        key: DASHBOARD_URLS.patient_users,
        label: "لیست بیماران",
      },
    ],
  },
  {
    key: DASHBOARD_URLS.categories,
    label: "زمینه های تخصصی",
  },
  {
    key: DASHBOARD_URLS.locations,
    label: "لوکیشن سرویس دهنده",
  },
  {
    key: DASHBOARD_URLS.schedules,
    label: "شیفت های کاری",
  },
  {
    key: DASHBOARD_URLS.days_off,
    label: "مرخصی ها",
  },
  {
    key: DASHBOARD_URLS.orders,
    label: "نوبت های رزرو",
  },
  {
    key: DASHBOARD_URLS.transactions,
    label: "تراکنش ها",
  },
  {
    key: DASHBOARD_URLS.payments,
    label: "پرداخت ها",
  },
  {
    key: DASHBOARD_URLS.tickets,
    label: "تیکت و پشتیبانی",
  },
];
