<script>
  import { Router, Route } from "svelte-routing";
  import Landing from "./routes/Landing.svelte";
  import Index from "./routes/Index.svelte";
  import About from "./routes/About.svelte";
  import Profile from "./routes/Profile.svelte";
  import Login from "./routes/Login.svelte";
  import Register from "./routes/Register.svelte";
  import Calling from "./routes/Calling.svelte";
  import Friends from "./routes/Friends.svelte";
  import Details from "./routes/Details.svelte";


</script>
<Router>
  <Route path="/" component="{Landing}"/>
  <Route path="/home" component="{Index}" />
  <Route path="/about" component="{About}" />
  <Route path="/profile" component="{Profile}" />
  <Route path="/login" component="{Login}" />
  <Route path="/register" component="{Register}" />
  <Route path="/friends" component="{Friends}" />
  <Route path="/details" component="{Details}" />
  <Route path="/calling/:channel/:uid" let:params>
    <Calling channelId={params.channel} uid={params.uid}/>
  </Route>
</Router>
