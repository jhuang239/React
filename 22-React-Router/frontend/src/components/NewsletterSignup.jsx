import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  // * fetcher is a hook that provides a fetch method to send requests to the server without transitioning to a new page
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
