export type Social = {
  data: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
};

export type Contact = {
  data: {
    phone: string;
    email: string;
    street: string;
    postal: string;
    country: string;
  };
};

export type Artist = {
  slug?: string;
  data: {
    title: string;
    guest: boolean;
  };
  content: string;
};
