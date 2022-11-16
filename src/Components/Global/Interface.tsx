export interface DATA {
  _id: string;
  productName: string;
  price: number;
  avatar: string;
  avatarID: string;
  brandName: string;
  bagType: string;
  bagColor: string;
  productDetail: string;
  createdAt: string;
  updatedAt: string;
  descAvatar?: string;
  productDesription1?: string;
  productDesription2?: string;
}

export interface iData extends DATA {
  QTY: number;
}
