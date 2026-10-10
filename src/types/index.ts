export type ProductCategory = 
  | 'all'
  | 'memorial-programs'
  | 'prayer-cards-keepsakes'
  | 'digital-memorials'
  | 'posters-large-format'
  | 'specialty';

export interface ProductItem {
  id: string;
  title: string;
  slug: string;
  category: ProductCategory;
  description: string;
  image: string;
  startingPrice: string;
  businessDays: number;
  highlight?: string;
  specs?: string[];
}

export interface MemorialRecord {
  id: string;
  fullName: string;
  slug: string;
  birthYear: string;
  passingYear: string;
  birthDate: string;
  passingDate: string;
  photo: string;
  memorialType: 'Digital Program' | 'Legacy Tribute';
  visibility: 'Public' | 'Private';
  programUrl?: string;
  lifeStory?: string;
  gallery?: string[];
  quote?: string;
  serviceInfo?: {
    date: string;
    time: string;
    location: string;
    officiant?: string;
    reception?: string;
  };
  condolences?: Array<{
    id: string;
    author: string;
    date: string;
    message: string;
    relation?: string;
  }>;
}

export interface RushOption {
  id: string;
  title: string;
  businessDays: number;
  fee: number;
  description: string;
}

export interface OrderFormData {
  orderSource: 'family' | 'provider';
  providerBusinessName?: string;
  providerContactName?: string;
  providerPhone?: string;
  providerEmail?: string;
  providerDeliveryAddress?: string;
  
  selectedProducts: string[];
  productQuantities: Record<string, number>;
  serviceLevel: string;
  formatOption: string;
  paperFinish: string;
  additionalInserts: string[];
  
  lovedOneName: string;
  birthDate: string;
  passingDate: string;
  serviceDate: string;
  serviceTime: string;
  serviceLocation: string;
  funeralServiceProvider: string;
  
  obituaryText: string;
  orderOfServiceText: string;
  acknowledgmentsText: string;
  scripturePoemText: string;
  repastInfo: string;
  additionalNotes: string;
  
  coverPhotoName?: string;
  additionalPhotosCount: number;
  collagePhotosCount: number;
  photoInstructions?: string;
  
  designColors: string;
  designTheme: string;
  floralPreferences: string;
  faithElements: string;
  specialRequests: string;
  
  digitalMemorialType: 'none' | 'program' | 'tribute';
  memorialVisibility: 'Public' | 'Private';
  qrCodePlacement: string;
  
  deliveryMethod: 'pickup' | 'funeral-home' | 'local' | 'shipping';
  deliveryFee: number;
  
  rushSelected: boolean;
  rushOptionId?: string;
  
  confirmAccurate: boolean;
  confirmTurnaround: boolean;
  confirmPolicies: boolean;
}
