// @format
import PageWithNavigator from "../components/PageWithNavigator";

const Page404 = () => {
  return (
    <PageWithNavigator title={"Page not found"} current={null}>
      <h1 className="header">404 - Page Not Found</h1>
    </PageWithNavigator>
  );
};

export default Page404;
