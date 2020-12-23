import { useState } from 'react';
import { ToolbarWrapper, ToolbarButton } from './index.style';

export default ({ count = 0 }) => {
  const [active, setActive] = useState(0);

  return (
    <ToolbarWrapper>
      <ToolbarButton primary onClick={() => setActive(0)} positive={active === 0} >
        ⌛ In-Progress Tasks
      </ToolbarButton>
      <ToolbarButton onClick={() => setActive(1)} positive={active === 1}>
        ✅️ Completed Tasks
      </ToolbarButton>
    </ToolbarWrapper>
  );
}
