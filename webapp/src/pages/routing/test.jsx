// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
  }
  
  const ROOTS_AUTH = '/auth';
  const ROOTS_DASHBOARD = '/dashboard';
  
  // ----------------------------------------------------------------------
  
  export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: '/login',
    register: '/register',
    loginUnprotected: '/login-unprotected',
    registerUnprotected: '/register-unprotected',
    verify: '/verify',
    resetPassword: '/reset-password',
    newPassword: '/new-password',
  };
  
  export const PATH_PAGE = {
    comingSoon: '/coming-soon',
    maintenance: '/maintenance',
    pricing: '/pricing',
    payment: '/payment',
    about: '/about-us',
    contact: '/contact-us',
    faqs: '/faqs',
    page403: '/403',
    page404: '/404',
    page500: '/500',
    components: '/components',
  };
  
  export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
  
    general: {
      app: path(ROOTS_DASHBOARD, '/app'),
      clientManagement: path(ROOTS_DASHBOARD, '/client-management'),
      groupManagement: path(ROOTS_DASHBOARD, '/group-management'),
      contractManagement: path(ROOTS_DASHBOARD, '/contract-management'),
      paymentManagement: path(ROOTS_DASHBOARD, '/payment-management'),
      file: path(ROOTS_DASHBOARD, '/file'),
      communication: path(ROOTS_DASHBOARD, '/communication'),
      sessions: path(ROOTS_DASHBOARD, '/sessions'),
      todo: path(ROOTS_DASHBOARD, '/todo'),
      user: path(ROOTS_DASHBOARD, '/users'),
      payment: path(ROOTS_DASHBOARD, '/payment'),
      profileInfo: path(ROOTS_DASHBOARD, '/profile-info'),
    },
  
    mail: {
      root: path(ROOTS_DASHBOARD, '/communication/mail'),
      all: path(ROOTS_DASHBOARD, '/communication/mail/INBOX'),
    },
  
    chat: {
      root: path(ROOTS_DASHBOARD, '/communication/chat'),
      new: path(ROOTS_DASHBOARD, '/communication/chat/new'),
      view: (name) => path(ROOTS_DASHBOARD, `/communication/chat/${name}`),
    },
  
    calendar: path(ROOTS_DASHBOARD, '/calendar'),
  
    kanban: path(ROOTS_DASHBOARD, '/kanban'),
  
    permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  
    user: {
      root: path(ROOTS_DASHBOARD, '/user'),
      new: path(ROOTS_DASHBOARD, '/user/new'),
      list: path(ROOTS_DASHBOARD, '/user/list'),
      cards: path(ROOTS_DASHBOARD, '/user/cards'),
      profile: path(ROOTS_DASHBOARD, '/user/profile'),
      account: path(ROOTS_DASHBOARD, '/user/account'),
      edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
      demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    },
  
    invoice: {
      root: path(ROOTS_DASHBOARD, '/invoice'),
      list: path(ROOTS_DASHBOARD, '/invoice/list'),
      new: path(ROOTS_DASHBOARD, '/invoice/new'),
      view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
      edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
      demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
      demoView: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5'),
    },
  };
  
  export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
  