
import loadable from '@loadable/component'

interface AsyncComponentProps {
  loader:()=>Promise<any>;
}

const AsyncComponent: React.FC<AsyncComponentProps> = ({ loader, ...props }) => {
  const Component = loadable(loader);
  return <Component {...props} />;
};


export default AsyncComponent