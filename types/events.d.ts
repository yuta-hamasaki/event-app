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
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  stripe_price_id: string;
  img: ImageData;
  title: MultiLanguageField<string>;
  date: MultiLanguageField<string>;
  detail: MultiLanguageField<string>;
  location: MultiLanguageField<string>;
  address: MultiLanguageField<string>;
 }