import { createUSD } from '@lib/utils';
import { Property, HostawayCalendar } from 'types';
import styles from './Price.module.css';
import { CSSProperties } from 'react';

type Props = {
  arrivalDate: string;
  departureDate: string;
  calendar: HostawayCalendar;
  property: Property;
  style: CSSProperties;
};

export default function Price({
  arrivalDate,
  departureDate,
  calendar,
  property,
  style,
}: Props) {
  const datesMap: Record<string, boolean> = {};
  const currDate = new Date(arrivalDate);
  while (currDate < new Date(departureDate)) {
    datesMap[currDate.toISOString().split('T')[0]] = true;
    currDate.setDate(currDate.getDate() + 1);
  }

  // Nights' total
  const price = calendar
    .filter((el) => datesMap[el.date])
    .reduce((acc, curr) => acc + curr.price, 0);

  const days = Object.keys(datesMap).length;
  const unitPrice = price / days;

  // Fees
  const cleaningFee = property.cleaningFee;
  const insuranceFee = property.insuranceFee;
  const serviceFee = (price * property.serviceFeePercent) / 100;
  const lodgingTax = (price * property.lodgingTaxPercent) / 100;
  const salesTax = (price * property.salesTaxPercent) / 100;

  return (
    <div className={styles.container}>
      <div style={style}>
        <p>
          {createUSD(unitPrice)} x {days} Staying Nights
          <span>{createUSD(price)}</span>
        </p>
        <p>
          Cleaning fees <span>{createUSD(cleaningFee)}</span>
        </p>
        <p>
          Insurance fees <span>{createUSD(insuranceFee)}</span>
        </p>
        <p>
          Service fees <span>{createUSD(serviceFee)}</span>
        </p>
        <p>
          Loading tax <span>{createUSD(lodgingTax)}</span>
        </p>
        <p>
          Sales tax <span>{createUSD(salesTax)}</span>
        </p>
      </div>

      <p className={styles.total}>
        Total
        <span>
          {createUSD(
            price +
              cleaningFee +
              insuranceFee +
              serviceFee +
              lodgingTax +
              salesTax
          )}
        </span>
      </p>
    </div>
  );
}
