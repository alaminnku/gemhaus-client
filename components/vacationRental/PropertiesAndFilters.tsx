'use client';

import React, { useState } from 'react';
import PropertyCards from './PropertyCards';
import { Offering, Property } from 'types';
import PropertyFilters from './PropertyFilters';

type Props = {
  properties: Property[];
  offerings: Offering[];
};

export default function PropertiesAndFilters({ properties, offerings }: Props) {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  return (
    <>
      <PropertyFilters
        properties={properties}
        propertyOfferings={offerings}
        setFilteredProperties={setFilteredProperties}
      />
      <PropertyCards properties={filteredProperties} />
    </>
  );
}
