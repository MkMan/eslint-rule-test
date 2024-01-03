import React, { useState } from 'react';

import Drawer from '@atlaskit/drawer';

import type { OverridesType } from '@atlaskit/drawer'; // !!! causes an error

const DrawerDefaultExample = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Drawer
        label="Default drawer"
        onClose={() => setOpen(false)}
        isOpen={open}
      >
        <p>hello</p>
      </Drawer>
      <button onClick={() => setOpen(true)}>
        Open drawer
      </button>
    </>
  );
};

export default DrawerDefaultExample;