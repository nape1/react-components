import reactLogo from "@assets/react.svg"

function renderUnoCss() {
  return (
    <>
      <div className="bg-blue-5 hover:bg-blue-9">
        &lt;div className="bg-blue-5 hover:bg-blue-9&gt;&lt;/div&gt;
      </div>
      <a text="red">&lt;a text="red"&gt;&lt;/div&gt;</a>
      <br />
      <a uno-text="red">&lt;a a uno-text="red"&gt;&lt;/div&gt;</a>
      <div uno-bg="green-4 hover:green-9">
        &lt;div uno-bg="green-4 hover:green-9"&gt;&lt;/div&gt;
      </div>
      <br />
      <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
      >
        &lt;button bg="blue-400 hover:blue-500 dark:blue-500
        dark:hover:blue-600" text="sm white" font="mono light" p="y-2 x-4"
        border="2 rounded blue-200"&gt;&lt;/button&gt;
      </button>
      <br />
      <br />
      <h1 className="ml-10 font-sans hover:font-serif">
        &lt;h1 className="ml-10 font-sans hover:font-serif"&gt;&lt;/h1&gt;
      </h1>
      <br />
      <h2 className=":uno: 30px text-red-500">
        &lt;h2 className=":uno: 30px text-red-500"&gt;&lt;/h2&gt;
      </h2>

      <br />
      <div text-red text-center text-2xl animate-bounce rounded text-teal-400>
        &lt;div text-red text-center text-2xl animate-bounce rounded
        text-teal-400&gt;&lt;/div&gt;
      </div>
      <div text-red text-center text-2xl animate-shake-x rounded>
        &lt;div text-red text-center text-2xl animate-shake-x rounded
        text-teal-400&gt;&lt;/div&gt;
      </div>
      <h5 className="text-red-500 text-20px">
        &lt;h5 className="text-red-500 text-30px"&gt;&lt;/h5&gt;
      </h5>
      <h2 text="red-500 18px">&lt;h2 text="red-500 30px"&gt;&lt;/h2&gt;</h2>
      <div className="f-center n-action">
        &lt;div className="f-center n-action"&gt;&lt;/div&gt;
      </div>
    </>
  )
}

export default renderUnoCss
