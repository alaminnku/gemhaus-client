'use client';

import SubmitButton from '@components/layout/SubmitButton';
import styles from './Reservation.module.css';
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { dateToMS, getISODate } from '@lib/utils';
import { Property } from 'types';

type Props = {
  property: Property;
  calendar: {
    result: { status: 'available'; date: string }[];
  };
};

export default function Reservation({ property, calendar }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [dates, setDates] = useState<DateRange | null>();

  // Destructure property
  const { hostawayId, cleaningFee } = property;

  // Create available dates map
  const availableDatesMap: { [key: string]: boolean } = {};
  calendar.result
    .filter(
      (el) =>
        el.status === 'available' &&
        dateToMS(el.date) >= dateToMS(getISODate(new Date()))
    )
    .forEach((el) => {
      availableDatesMap[el.date] = true;
    });

  async function handleReservation() {
    if (!dates) return;

    const data = {
      channelId: 2000,
      listingMapId: hostawayId,
      guestName: '',
      guestFirstName: '',
      guestLastName: '',
      guestZipCode: '',
      guestAddress: '',
      guestCity: '',
      guestCountry: '',
      guestEmail: '',
      guestPicture: 'url',
      numberOfGuests: 0,
      adults: 0,
      children: null,
      infants: null,
      pets: null,
      arrivalDate: getISODate(dates[0]),
      departureDate: getISODate(dates[1]),
      phone: '',
      totalPrice: 0,
      taxAmount: 0,
      cleaningFee: cleaningFee,
      currency: 'USD',

      // Decide based on UI
      isGuestIdentityVerified: 0,
      isGuestVerifiedByEmail: 0,
      isGuestVerifiedByWorkEmail: 0,
      isGuestVerifiedByFacebook: 0,
      isGuestVerifiedByGovernmentId: 0,
      isGuestVerifiedByPhone: 0,
      isGuestVerifiedByReviews: 0,
      channelCommissionAmount: null,

      // Need clarification
      isManuallyChecked: 0,
      isInitial: 0,
      guestRecommendations: 0,
      guestTrips: 0,
      guestWork: null,
      checkInTime: null,
      checkOutTime: null,
      securityDepositFee: null,
      isPaid: null,
      hostNote: null,
      guestNote: null,
      guestLocale: null,
      doorCode: '12345',
      doorCodeVendor: 'test',
      doorCodeInstruction: 'test',
      comment: null,
      airbnbExpectedPayoutAmount: 111.12,
      airbnbListingBasePrice: 110,
      airbnbListingCancellationHostFee: 12.02,
      airbnbListingCancellationPayout: 122,
      airbnbListingCleaningFee: 1,
      airbnbListingHostFee: 43,
      airbnbListingSecurityPrice: 12,
      airbnbOccupancyTaxAmountPaidToHost: 332,
      airbnbTotalPaidAmount: 12,
      airbnbTransientOccupancyTaxPaidAmount: 0,
      airbnbCancellationPolicy: 'moderate',
      customerUserId: null,
      customFieldValues: [
        {
          customFieldId: 167,
          value: 'Custom field value one',
        },
        {
          customFieldId: 243,
          value: 'Custom field value two',
        },
      ],
    };
  }

  return (
    <div className={styles.container}>
      <DateRangePicker
        ranges={[]}
        value={dates}
        onChange={setDates}
        placeholder='Check In -> Check Out'
        shouldDisableDate={(date: Date) => !availableDatesMap[getISODate(date)]}
      />

      <SubmitButton
        buttonText='Book Now'
        isLoading={isLoading}
        handleSubmit={handleReservation}
      />
    </div>
  );
}
