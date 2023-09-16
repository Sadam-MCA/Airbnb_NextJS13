import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "locationtype";

export const ListingTitle = (record: TListing): string => {
  return record.locationtype || String(record.id);
};
