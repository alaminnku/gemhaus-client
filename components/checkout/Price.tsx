import { getISODate, createUSD } from '@lib/utils';
import { Property } from 'types';

type Props = {
  startDate: string;
  endDate: string;
  calendar: {
    date: string;
    price: number;
    status: 'available';
  }[];
  property: Property;
};

export default function Price({
  startDate,
  endDate,
  calendar,
  property,
}: Props) {
  // All dates between check in and checkout
  const dates: { [key: string]: boolean } = {};
  const currDate = new Date(startDate);
  while (currDate <= new Date(endDate)) {
    dates[getISODate(currDate)] = true;
    currDate.setDate(currDate.getDate() + 1);
  }

  // Nights' total
  const price = calendar
    .filter((el) => dates[el.date])
    .reduce((acc, curr) => acc + curr.price, 0);

  const days = Object.keys(dates).length;
  const unitPrice = price / days;

  // Fees
  const cleaningFee = property.cleaningFee;
  const insuranceFee = property.insuranceFee;
  const serviceFee = (price * property.serviceFee) / 100;
  const lodgingTax = (price * property.lodgingTax) / 100;
  const salesTax = (price * property.salesTax) / 100;

  return (
    <div>
      <p>
        <span>
          {createUSD(unitPrice)} X {days} Nights:{' '}
        </span>{' '}
        <span>{createUSD(price)}</span>{' '}
      </p>
      <p>
        <span>Cleaning Fee:</span> <span>{createUSD(cleaningFee)}</span>
      </p>
      <p>
        <span>Insurance Fee:</span> <span>{createUSD(insuranceFee)}</span>
      </p>
      <p>
        <span>Service Fee:</span> <span>{createUSD(serviceFee)}</span>
      </p>
      <p>
        <span>Lodging tax:</span> <span>{createUSD(lodgingTax)}</span>
      </p>
      <p>
        <span>Sales tax:</span> <span>{createUSD(salesTax)}</span>
      </p>

      <p>
        <span>Total:</span>{' '}
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
