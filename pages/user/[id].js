import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import styles from "../../styles/Home.module.css";
import { useForm } from "laravel-precognition-react";
import { useRouter } from "next/router";

const PrecognitionForm = () => {
  const router = useRouter();

  const [id, setId] = useState();

  useEffect(() => {
    if (router.isReady) setId(router.query.id);
  }, [router.isReady]);

  const getPrecognitionUrl = useCallback( () => "http://laravel.test/user/" + id, [id] );

  const form = useForm("post", getPrecognitionUrl, { name: "" });

  const submit = (e) => { e.preventDefault(); };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>The user retrieved from the url is: <b>{id}</b></p>
        <p>Full url is: <b>{getPrecognitionUrl()}</b></p>
        <br />
        <form onSubmit={submit}>
          <label for="name">Name</label>
          <input
            id="name"
            value={form.data.name}
            onChange={(e) => form.setData("name", e.target.value)}
            onBlur={() => form.validate("name")}
          />
          {form.invalid("name") && <div>{form.errors.name}</div>}
          <br />
          <button disabled={form.processing}>Create User</button>
        </form>
      </main>
    </div>
  );
};

export default PrecognitionForm;
