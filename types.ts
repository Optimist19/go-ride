export interface ChooseYourCarDataType {
  car_type: string;
  desc: string;
  mi: string;
  img: string;
}

export interface TestimonialDataType {
  client: string;
  statement: string;
  city: string;
}

export  interface SuggestedDataType {
    type: string;
    id: string;
    geometry: {
        type: string;
        coordinates: number[];
    };
    properties: {
        mapbox_id: string;
        feature_type: string;
        full_address: string;
        name: string;
        name_preferred: string;
        coordinates: {
            longitude: number;
            latitude: number;
        };
        place_formatted: string;
        context: {
            street: {
                mapbox_id: string;
                name: string;
            };
            postcode: {
                mapbox_id: string;
                name: string;
            };
            place: {
                mapbox_id: string;
                name: string;
                wikidata_id: string;
                alternate: {
                    mapbox_id: string;
                    name: string;
                };
            };
            region: {
                mapbox_id: string;
                name: string;
                wikidata_id: string;
                region_code: string;
                region_code_full: string;
            };
        country: {
          mapbox_id: string;
          name: string;
          wikidata_id: string;
          country_code: string;
          country_code_alpha_3: string;        }
      }
    }
}


export interface userData {
    startDestination: string;
  endDestination: string;
  carClass: string;
  price?: number;
  phoneNumber: number;
}

export interface RideState {
  startDestination: string;
  endDestination: string;
  carClass: string;
  carPrice: number;
  phoneNumber: number;
  status: string;
  error: unknown;
  startDestinationResult: SuggestedDataType[];
  endDestinationResult: SuggestedDataType[];
  toggleStartDestinationResultModal: boolean;
  toggleEndDestinationResultModal: boolean;
  isPanelSlideOpen: boolean;
  isBook: boolean;
  startLat: number;
  startLong: number;
  endLat: number;
  endLong: number;
  coordinateRoutes: number[][];
  distance: number;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}