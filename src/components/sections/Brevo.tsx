import { t } from "i18next";
import { Trans } from "astro-i18next/components";

//TODO:Route back Fabrik to Brevo (subscription?)

const Brevo = () => {
  const submitForm = () => {
    console.log("submitting form");
  };

  return (
    <section
      className="box-border relative block py-20 overflow-hidden leading-6 text-center text-white bg-green-500 bg-no-repeat bg-cover tails-selected-element"
      data-primary="green-400"
      contentEditable="true"
    >
      <div className="w-full max-w-2xl px-4 mx-auto leading-6 text-center xl:px-0">
        <div className="box-border flex flex-wrap justify-center -mx-4 text-white">
          <div className="relative w-full px-4 leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
            <h2 className="box-border px-10 mx-0 mt-0 mb-10 font-sans text-2xl font-bold leading-tight text-white md:px-0 sm:text-3xl md:text-4xl">
              {t("newsletterForm.title")}
            </h2>
            <form
              id="subscriptionForm"
              className="box-border text-center text-indigo-900"
            >
              <div className="flex flex-wrap justify-center leading-6 text-green-900">
                <div
                  className="box-border relative py-1 pr-1 text-center bg-white border-green-600 rounded-full sm:border-2"
                  data-primary="green-500"
                  data-rounded="rounded-full"
                >
                  <input
                    type="email"
                    placeholder={t("newsletterForm.placeholder")}
                    className="inline-block w-full h-16 px-6 py-0 mb-6 overflow-visible text-xl font-semibold text-green-400 placeholder-green-300 align-top bg-transparent border-2 border-green-600 rounded-full sm:w-auto sm:border-0 sm:mb-0 focus:outline-none md:text-left"
                    data-primary="green-500"
                    data-rounded="rounded-full"
                  />
                  <button
                    className="inline-block w-full h-16 px-10 py-0 m-0 overflow-visible text-xl font-semibold text-white normal-case align-middle bg-green-400 border border-transparent border-solid rounded-full cursor-pointer select-none sm:w-auto focus:outline-none focus:shadow-xs"
                    data-primary="green-500"
                    data-rounded="rounded-full"
                    onClick={submitForm}
                  >
                    {t("newsletterForm.button")}
                  </button>
                </div>
              </div>
              <div
                className="mt-8 leading-6 text-green-100"
                data-primary="green-400"
              >
                {t("newsletterForm.consent")}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brevo;
