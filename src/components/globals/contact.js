import {MailIcon, PhoneIcon, XIcon} from '@heroicons/react/outline'
import React, {Fragment, useState} from "react";
import {Dialog, Transition} from '@headlessui/react'
import ReCAPTCHA from "react-google-recaptcha";
import {useForm} from "react-hook-form";
import dynamic from 'next/dynamic'

const ContactFireworks = dynamic(() => import('./contact.fireworks'), {ssr: false})

export default function ContactModal(props) {
  let {open, setOpen} = props
  const [success, setSuccess] = useState(false)

  const {register, handleSubmit, reset, getValues, formState: {errors}} = useForm({
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      subject: '',
      message: ''
    }
  });

  const recaptchaRef = React.useRef(null);

  const onSubmit = (data, e) => {
    e.preventDefault();
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };

  const onError = (errors, e) => {
    console.log(errors, e)
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({...getValues(), captcha: captchaCode}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        // show firework
        setSuccess(true)

        setTimeout(() => {
          setSuccess(false)
          reset()
          setOpen(false)
        }, 6000)
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message)
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
    }
  };

  return (<>
      {success && (<ContactFireworks/>)}
      <Transition.Root show={open}
as={Fragment}>
        <Dialog as="div"
className="fixed z-10 inset-0 overflow-y-auto"
onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"/>
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
                <div className="absolute top-0 right-0 pt-4 pr-4 z-20">
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Schließen</span>
                    <XIcon className="h-6 w-6"
aria-hidden="true"/>
                  </button>
                </div>
                <div>
                  <h2 className="sr-only">Kontaktiere uns</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative overflow-hidden py-10 px-6 bg-primary-800 sm:px-10 xl:p-12">
                      <div className="absolute inset-0 pointer-events-none sm:hidden"
aria-hidden="true">
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={343}
                          height={388}
                          viewBox="0 0 343 388"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                            fill="url(#linear1)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear1"
                              x1="254.553"
                              y1="107.554"
                              x2="961.66"
                              y2="814.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff"/>
                              <stop offset={1}
stopColor="#fff"
stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={359}
                          height={339}
                          viewBox="0 0 359 339"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                            fill="url(#linear2)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear2"
                              x1="192.553"
                              y1="28.553"
                              x2="899.66"
                              y2="735.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff"/>
                              <stop offset={1}
stopColor="#fff"
stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={160}
                          height={678}
                          viewBox="0 0 160 678"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                            fill="url(#linear3)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear3"
                              x1="192.553"
                              y1="325.553"
                              x2="899.66"
                              y2="1032.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff"/>
                              <stop offset={1}
stopColor="#fff"
stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white">Kontaktiere uns</h3>
                      <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                        Gerne können Sie uns Ihre Nachricht zukommen lassen. Wir werden Ihre E-Mail schnellstmöglich
                        beantworten.
                      </p>
                      <dl className="mt-8 space-y-6">
                        <dt>
                          <span className="sr-only">Phone number</span>
                        </dt>
                        <dd className="flex text-base text-indigo-50">
                          <PhoneIcon className="flex-shrink-0 w-6 h-6 text-indigo-200"
aria-hidden="true"/>
                          <span className="ml-3">040 210 919 45-0</span>
                        </dd>
                        <dt>
                          <span className="sr-only">Email</span>
                        </dt>
                        <dd className="flex text-base text-indigo-50">
                          <MailIcon className="flex-shrink-0 w-6 h-6 text-indigo-200"
aria-hidden="true"/>
                          <span className="ml-3">info@splintnet.de</span>
                        </dd>
                      </dl>
                      <ul role="list"
className="mt-8 flex space-x-12">
                        <li>
                          <a className="text-indigo-200 hover:text-indigo-100"
target="_blank"
                             href="https://www.facebook.com/splintnet"
rel="noreferrer">
                            <span className="sr-only">Facebook</span>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              aria-hidden="true"
                            >
                              <path
                                d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a className="text-indigo-200 hover:text-indigo-100"
target="blank"
                             href="https://github.com/splintnet">
                            <span className="sr-only">GitHub</span>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              aria-hidden="true"
                            >
                              <path
                                d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a className="text-indigo-200 hover:text-indigo-100"
target="_blank"
                             href="https://twitter.com/splintnet"
rel="noreferrer">
                            <span className="sr-only">Twitter</span>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              aria-hidden="true"
                            >
                              <path
                                d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                      <form onSubmit={handleSubmit(onSubmit, onError)}
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onReCAPTCHAChange}
                          />
                          <label htmlFor="firstname"
className="block text-sm font-medium text-gray-900">
                            Vorname
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="firstname"
                              id="firstname"
                              {...register("firstname", {required: true})}
                              autoComplete="given-name"
                              className="py-3 px-4 block w-full shadow text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                          {errors.firstname && (
                            <span className="text-xs text-red-600">Bitte geben Sie Ihren Vornamen an</span>)}
                        </div>
                        <div>
                          <label htmlFor="lastname"
className="block text-sm font-medium text-gray-900">
                            Nachname
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="lastname"
                              id="lastname"
                              {...register("lastname", {required: true})}
                              autoComplete="last-name"
                              className="py-3 px-4 block w-full shadow text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                          {errors.lastname && (
                            <span className="text-xs text-red-600">Bitte geben Sie Ihren Nachnamen an</span>)}
                        </div>
                        <div>
                          <label htmlFor="email"
className="block text-sm font-medium text-gray-900">
                            E-Mail
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              {...register("email", {required: true})}
                              type="email"
                              autoComplete="email"
                              className="py-3 px-4 block w-full shadow text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                          {errors.lastname && (
                            <span className="text-xs text-red-600">Bitte geben Sie Ihre E-Mail Adresse an</span>)}
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label htmlFor="phone"
className="block text-sm font-medium text-gray-900">
                              Mobil
                            </label>
                          </div>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              {...register("phone", {required: true})}
                              autoComplete="tel"
                              className="py-3 px-4 block w-full shadow text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                              aria-describedby="phone-optional"
                            />
                          </div>
                          {errors.phone && (
                            <span className="text-xs text-red-600">Bitte geben Sie Ihre Telefonnummer an</span>)}
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="subject"
className="block text-sm font-medium text-gray-900">
                            Betreff
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="subject"

                              {...register("subject", {required: true})}
                              id="subject"
                              className="py-3 px-4 block w-full shadow text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                          </div>
                          {errors.subject && (
                            <span className="text-xs text-red-600">Bitte geben Sie einen Betreff an</span>)}
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex justify-between">
                            <label htmlFor="message"
className="block text-sm font-medium text-gray-900">
                              Nachricht
                            </label>
                            <span id="message-max"
className="text-xs text-gray-500">
                              Max. 500 Zeichen
                            </span>
                          </div>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              {...register("message", {required: true})}
                              className="py-3 px-4 block w-full shadow text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                              aria-describedby="message-max"
                            />
                          </div>

                          {errors.message && (
                            <span className="text-xs text-red-600">Und eine Nachricht, damit wir uns bestmöglich auf ein Gespräch vorbereiten können</span>)}
                        </div>
                        <div className="sm:col-span-2 sm:flex sm:justify-end">

                          <button
                            type="button"
onClick={() => setOpen(false)}

                            className="mt-2 w-full inline-flex items-center justify-center border border-gray-300 px-6 py-3 rounded-md shadow text-base font-medium mr-2 bg-white shadow hover:bg-gray-100 sm:w-auto"
                          >
                            abbrechen
                          </button>
                          <button
                            disabled={success}
                            type="submit"
                            className={"mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 sm:w-auto " + (success ? 'bg-opacity-50' : '')}
                          >
                            {success ? 'gesendet' : 'senden'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

