import { createUSD, formatDate } from '@lib/utils';
import { Property, HostawayCalendar } from 'types';
import styles from './Price.module.css';

type Props = {
  arrivalDate: Date | string;
  departureDate: Date | string;
  calendar: HostawayCalendar;
  property: Property;
};

export default function Price({
  arrivalDate,
  departureDate,
  calendar,
  property,
}: Props) {
  // All dates between check in and checkout
  const datesMap: Record<string, boolean> = {};
  const currDate = new Date(formatDate(arrivalDate));
  while (currDate < new Date(formatDate(departureDate))) {
    datesMap[formatDate(currDate)] = true;
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
      <p>
        {createUSD(unitPrice)} x {days} Staying Nights
        <span>{createUSD(price)}</span>
      </p>
      <p>
        Cleaning Fee <span>{createUSD(cleaningFee)}</span>
      </p>
      <p>
        Insurance Fee <span>{createUSD(insuranceFee)}</span>
      </p>
      <p>
        Service Fee <span>{createUSD(serviceFee)}</span>
      </p>
      <p>
        Lodging tax <span>{createUSD(lodgingTax)}</span>
      </p>
      <p>
        Sales tax <span>{createUSD(salesTax)}</span>
      </p>

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
