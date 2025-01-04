interface MultiLanguageField<T> {
  fieldId: string;
  'en-title'?: T;
  'ja-title'?: T;
  'en-location'?: T;
  'ja-location'?: T;
  'en-detail'?: T;
  'ja-detail'?: T;
  'en-date'?: T;
  'ja-date'?: T;
  'en-address'?: T;
  'ja-address'?: T;
 }
 
 interface ImageData {
  url: string;
  height: number;
  width: number;
 }
 
 export interface Event {
  id: string;
  title: {
    'en-title': string;
  };
  detail: {
    'en-detail': string;
  };
  img: {
    url: string;
    width: number;
    height: number;
  };
  location: {
    'en-location': string;
  };
  address: {
    'en-address': string;
  };
  date: {
    'en-date': string;
  };
  stripe_price_id?: string;
}