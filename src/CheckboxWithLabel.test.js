import React from 'react';
import CheckboxWithLabel from './CheckboxWithLabel';
import { shallow } from 'enzyme';

describe('Tester composant CheckboxWithLabel', () => {
  it('Lors de initialisation, case non checker et valeur de labelOFF', () => {
      const MonCheckbox = shallow (<CheckboxWithLabel labelOn="ON" labelOff="OFF"   />);
      expect(MonCheckbox.text()).toEqual('OFF');
  });

  it('Lors du clic, on passe a valeur de labelON', () => {
        const MonCheckbox = shallow (<CheckboxWithLabel labelOn="ON" labelOff="OFF"   />);
        MonCheckbox.find('input').simulate('change');
        expect(MonCheckbox.text()).toEqual('ON');
  });

  it('Lors de 2 clics suivi , on passe a valeur de labelOFF', () => {
        const MonCheckbox = shallow (<CheckboxWithLabel labelOn="ON" labelOff="OFF"   />);
        MonCheckbox.find('input').simulate('change');
        expect(MonCheckbox.text()).toEqual('ON');
        MonCheckbox.find('input').simulate('change');
        expect(MonCheckbox.text()).toEqual('OFF');
  });

})