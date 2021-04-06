import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const SelectRoot = styled('select')`
  border-radius: 4px;
  width: 100px;
  height: 30px;
  border: solid #adb7c4 1px;
`;

export function SelectLanguages() {
  const router = useRouter();
  const { locale } = router;
  const [select, setSelect] = useState(locale);

  useEffect(() => {
    router.push('/', '/', { locale: select });
  }, [select]);

  const handleSelect = ev => {
    ev.preventDefault();
    setSelect(ev.target.value);
  };

  return (
    <SelectRoot name="languages" id="languages" value={select} onChange={handleSelect}>
      <option value="es">Spanish</option>
      <option value="en">English</option>
    </SelectRoot>
  );
}

SelectLanguages.propTypes = {
  t: PropTypes.func,
};

export default SelectLanguages;
