"use client"

// FIXME: Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
export default function Statcounter() {
  if (process.env.NODE_ENV === "development") return null

  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
        var sc_project=13071556;  
        var sc_invisible=0; 
        var sc_security="5359c3b5";  
        var scJsHost = "https://";
        document.write("<script type='text/javascript' src='" + scJsHost + "statcounter.com/counter/counter.js'></"+"script>");
        `,
        }}
      />
    </>
  )
}
