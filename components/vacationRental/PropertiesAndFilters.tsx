'use client';

import React, { useState } from 'react';
import PropertyCards from './PropertyCards';
import { Offering, PropertiesView, Property } from 'types';
import PropertyFilters from './PropertyFilters';
import ViewSortFilter from './ViewSortFilter';
import styles from './PropertiesAndFilters.module.css';

type Props = {
  properties: Property[];
  offerings: Offering[];
  arrivalDate: string;
  departureDate: string;
};

export default function PropertiesAndFilters({
  properties,
  offerings,
  arrivalDate,
  departureDate,
}: Props) {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState<PropertiesView>('singleColumn');

  return (
    <>
      <ViewSortFilter setView={setView} setShowFilters={setShowFilters} />

      <div className={styles.filters_and_properties}>
        <PropertyFilters
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          showFilters={showFilters}
          properties={properties}
          propertyOfferings={offerings}
          setShowFilters={setShowFilters}
          setFilteredProperties={setFilteredProperties}
        />
        <PropertyCards view={view} properties={filteredProperties} />
      </div>
    </>
  );
}
