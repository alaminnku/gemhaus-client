'use client';

import React, { useState } from 'react';
import PropertyCards from './PropertyCards';
import { Property } from 'types';
import PropertyFilters from './PropertyFilters';

type Props = {
  properties: Property[];
};

export default function PropertiesAndFilters({ properties }: Props) {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  return (
    <>
      <PropertyFilters
        properties={properties}
        setFilteredProperties={setFilteredProperties}
      />
      <PropertyCards properties={filteredProperties} />
    </>
  );
}
