import React from 'react';
import { translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';
import EntitiesMenuItems from 'app/entities/menu';

export const EntitiesMenu = () => (
  <NavDropdown
    icon="th-list"
    // name={translate('global.menu.entities.main')}
    name={'Menu'}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <EntitiesMenuItems />
  </NavDropdown>
);
