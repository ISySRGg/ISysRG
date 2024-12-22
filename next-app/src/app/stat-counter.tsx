"use client"

export default function StatCounter() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
      <!-- Default Statcounter code for ISys Research Group https://isysrg.com -->
<script type="text/javascript">
var sc_project=13071556; 
var sc_invisible=0; 
var sc_security="5359c3b5"; 
var scJsHost = "https://";
document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript><div class="statcounter"><a title="Web Analytics Made Easy -
Statcounter" href="https://statcounter.com/p13071556/?guest=1" target="_blank"><img
class="statcounter" src="https://c.statcounter.com/13071556/0/5359c3b5/0/"
alt="Web Analytics Made Easy - Statcounter"
referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>
<!-- End of Statcounter Code -->
      `,
      }}
    ></div>
  )
}
