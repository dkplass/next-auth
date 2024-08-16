import CardWrapper from "./CardWrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      login-form
    </CardWrapper>
  );
};

export default LoginForm;
