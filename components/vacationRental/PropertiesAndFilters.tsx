'use client';

import React, { useState } from 'react';
import PropertyCards from './PropertyCards';
import { Offering, Property } from 'types';
import PropertyFilters from './PropertyFilters';
import ViewSortFilter from './ViewSortFilter';
import styles from './PropertiesAndFilters.module.css';

type Props = {
  properties: Property[];
  offerings: Offering[];
};

export default function PropertiesAndFilters({ properties, offerings }: Props) {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <ViewSortFilter setShowFilters={setShowFilters} />

      <div className={styles.filters_and_properties}>
        <PropertyFilters
          showFilters={showFilters}
          properties={properties}
          propertyOfferings={offerings}
          setShowFilters={setShowFilters}
          setFilteredProperties={setFilteredProperties}
        />
        <PropertyCards properties={filteredProperties} />
      </div>
    </>
  );
}
