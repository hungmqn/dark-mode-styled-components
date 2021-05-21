import { FunctionComponent } from 'react';
import { useTheme } from 'packages/theme';
import { Button } from 'packages/theme/components';

const App: FunctionComponent = () => {
  const theme = useTheme();

  return (
    <div style={{ marginTop: theme.spaces[2] }}>
      <h3>Styled Button</h3>
      <Button text="Button" onClick={() => console.log('aalo')} />
      <h3>Native Elements</h3>
      <div>
        <input type="checkbox" name="" id="" />
      </div>
      <div>
        <button>Button</button>
      </div>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};

export default App;
