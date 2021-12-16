import Layout from '@/components/site-layout';

const About = function () {
	const meta = {
		pageTitle: 'About',
		pageDescription: 'About Page description',
	};

	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<h1>About Page (h1)</h1>
			<h2>Lungfish (h2)</h2>
			<p>
				American post-hardcore band founded in 1987 in Baltimore, Maryland. The
				origins of the group came from a collaboration between vocalist Daniel
				Higgs and bassist John Chriest where Chriest would create sound collages
				and loops for Higgs&apos; poetry readings. The duo eventually hooked up
				with guitarist Asa Osborne, who had done a stint in the hardcore band
				Reptile House with Higgs and after briefly working with another drummer,
				they added Mitchell Feldstein to the group. Early on, Higgs decamped for
				San Francisco, leaving the band&apos;s future in doubt.
			</p>
			<p>
				Lungfish&apos;s debut release, &quot;Necklace of Heads&quot; was
				intended as document of the songs they&apos;d written to that point and
				was released through the joint effort of the Simple Machines and
				Dischord Records labels. Response to the record was positive enough for
				the band to decide to tour and they would continue to work with Dischord
				for the majority of their lifespan.
			</p>
			<h3>Member Changes (h3)</h3>
			<p>
				After 1994&apos;s &quot;Pass and Stow&quot; LP, Chriest left the band
				and was replaced by Sean Meadows (of June Of 44). Beginning with
				1998&apos;s &quot;Artificial Horizon&quot;, Nathan Bell took over as
				bassist but Meadows return for 2003&apos;s &quot;Love Is Love&quot; LP.
			</p>
			<h4>Current (h4)</h4>
			<p>Lungfish has been on indefinite hiatus since 2005.</p>
		</Layout>
	);
};

export default About;
