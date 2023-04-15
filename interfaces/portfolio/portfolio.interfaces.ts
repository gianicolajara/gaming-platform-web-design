export interface ItemStatisticsProps {
  id?: number;
  icon: string;
  number: number;
  content: string;
  index?: number;
}

export interface ReadMoreProps {
  id?: number;
  img: string;
  left: boolean;
}

export interface ItemCustomerProps {
  id?: number;
  avatar: string;
  name: string;
  city: string;
  content: string;
  selected?: boolean;
}

export interface CustomerProps {
  listCustomers: Array<ItemCustomerProps>;
}

export interface ArrowsListCustomersProps {
  handleLeft: () => void;
  handleRight: () => void;
}

export interface CircleListCustomersProps {
  listCustomers: Array<ItemCustomerProps>;
  index: number;
}
