const html_tables = {
	noun: `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="gender" rowspan="2">neuter</th> <th colspan="2">singular</th> <th colspan="2">plural</th> </tr>
		<tr> <th>indefinite</th> <th>definite</th> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>nominative</th> <td id="n0"></td> <td id="n1"></td> <td id="n2"></td> <td id="n3"></td> </tr>
		<tr> <th>accusative</th> <td id="n4"></td> <td id="n5"></td> <td id="n6"></td> <td id="n7"></td> </tr>
		<tr> <th>dative</th> <td id="n8"></td> <td id="n9"></td> <td id="n10"></td> <td id="n11"></td> </tr>
		<tr> <th>genitive</th> <td id="n12"></td> <td id="n13"></td> <td id="n14"></td> <td id="n15"></td> </tr>
	</tbody></table>`,
	noun_mobile: `<table id="noun_declension_mobile" class="pfont" hidden><tbody>
		<tr> <th id="_declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="_gender" rowspan="2">neuter</th> <th colspan="2">singular</th> </tr>
		<tr> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>nominative</th> <td id="_n0"></td> <td id="_n1"></td> </tr>
		<tr> <th>accusative</th> <td id="_n4"></td> <td id="_n5"></td> </tr>
		<tr> <th>dative</th> <td id="_n8"></td> <td id="_n9"></td> </tr>
		<tr> <th>genitive</th> <td id="_n12"></td> <td id="_n13"></td> </tr>
		<tr> <th></th> <th colspan="2">plural</th> </tr>
		<tr> <th>nominative</th> <td id="_n2"></td> <td id="_n3"></td> </tr>
		<tr> <th>accusative</th> <td id="_n6"></td> <td id="_n7"></td> </tr>
		<tr> <th>dative</th> <td id="_n10"></td> <td id="_n11"></td> </tr>
		<tr> <th>genitive</th> <td id="_n14"></td> <td id="_n15"></td> </tr>
	</tbody></table>`,

	noun_sg: `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="gender" rowspan="2">neuter</th> <th colspan="2">singular only</th> </tr>
		<tr> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>nominative</th> <td id="n0"></td> <td id="n1"></td> </tr>
		<tr> <th>accusative</th> <td id="n4"></td> <td id="n5"></td> </tr>
		<tr> <th>dative</th> <td id="n8"></td> <td id="n9"></td> </tr>
		<tr> <th>genitive</th> <td id="n12"></td> <td id="n13"></td> </tr>
	</tbody></table>`,
	noun_pl: `<table id="noun_declension" class="pfont"><tbody>
		<tr> <th id="declension_top" colspan="5">declension for...</th> </tr>
		<tr> <th id="gender" rowspan="2">neuter</th> <th colspan="2">plural only</th> </tr>
		<tr> <th>indefinite</th> <th>definite</th> </tr>
		<tr> <th>nominative</th> <td id="n2"></td> <td id="n3"></td> </tr>
		<tr> <th>accusative</th> <td id="n6"></td> <td id="n7"></td> </tr>
		<tr> <th>dative</th> <td id="n10"></td> <td id="n11"></td> </tr>
		<tr> <th>genitive</th> <td id="n14"></td> <td id="n15"></td> </tr>
	</tbody></table>`,

	verb: `<table id="verb_conjugation" class="pfont"><tbody>
		<tr> <th id="conjugation_top" colspan="3">conjugation for...</th> </tr>
		<tr> <th>infinitive</th> <td id="infinitive" colspan="2"></td> </tr>
		<tr> <th>supine</th> <td id="supine" colspan="2"></td> </tr>
		<tr> <th>present participle</th> <td id="present_participle" colspan="2"></td> </tr>
		<tr> <th></th> <th>present</th> <th>past</th> </tr>
		<tr> <th>jek</th> <td id="v0"></td> <td id="v1"></td> </tr>
		<tr> <th>þú</th> <td id="v2"></td> <td id="v3"></td> </tr>
		<tr> <th>hann, hon, þat</th> <td id="v4"></td> <td id="v5"></td> </tr>
		<tr> <th>vit</th> <td id="v6"></td> <td id="v7"></td> </tr>
		<tr> <th>þit</th> <td id="v8"></td> <td id="v9"></td> </tr>
		<tr> <th>þeir, þær, þey</th> <td id="v10"></td> <td id="v11"></td> </tr>
		<tr> <th>gerund</th> <td id="gerund" colspan="2"></td> </tr>
		<tr> <th></th> <th colspan="2">imperative</th> </tr>
		<tr> <th>singular</th> <td id="imperative_sg" colspan="2"></td> </tr>
		<tr> <th>plural</th> <td id="imperative_pl" colspan="2"></td> </tr>
	</tbody></table>`,
	verb_mediopassive: `<table id="mediopassive_declension" class="pfont"><tbody>
		<tr> <th id="mediopassive_top" colspan="3">conjugation for...</th> </tr>
		<tr> <th>infinitive</th> <td id="infinitive2" colspan="2"></td> </tr>
		<tr> <th></th> <th>present</th> <th>past</th> </tr>
		<tr> <th>jek</th> <td id="_v0"></td> <td id="_v1"></td> </tr>
		<tr> <th>þú</th> <td id="_v2"></td> <td id="_v3"></td> </tr>
		<tr> <th>hann, hon, þat</th> <td id="_v4"></td> <td id="_v5"></td> </tr>
		<tr> <th>vit</th> <td id="_v6"></td> <td id="_v7"></td> </tr>
		<tr> <th>þit</th> <td id="_v8"></td> <td id="_v9"></td> </tr>
		<tr> <th>þeir, þær, þey</th> <td id="_v10"></td> <td id="_v11"></td> </tr>
	</tbody></table>`,

	auxiliary: `<table id="auxiliary_declension" class="pfont"><tbody>
		<tr> <th id="auxiliary_top" colspan="3">conjugation for...</th> </tr>
		<tr> <th></th> <th>present</th> <th>past</th> </tr>
		<tr> <th>jek</th> <td id="v0"></td> <td id="v1"></td> </tr>
		<tr> <th>þú</th> <td id="v2"></td> <td id="v3"></td> </tr>
		<tr> <th>hann, hon, þat</th> <td id="v4"></td> <td id="v5"></td> </tr>
		<tr> <th>vit</th> <td id="v6"></td> <td id="v7"></td> </tr>
		<tr> <th>þit</th> <td id="v8"></td> <td id="v9"></td> </tr>
		<tr> <th>þeir, þær, þey</th> <td id="v10"></td> <td id="v11"></td> </tr>
	</tbody></table>`,

	adjective: `<table id="adjective_declension" class="pfont"><tbody>
		<tr> <th id="adjective_top" colspan="4">declension for...</th> </tr>
		<tr> <th>singular</th> <th>masculine</th> <th>feminine</th> <th>neuter</th> </tr>
		<tr> <th>nominative</th> <td id="adj0"></td> <td id="adj1"></td> <td id="adj2"></td> </tr>
		<tr> <th>accusative</th> <td id="adj3"></td> <td id="adj4"></td> <td id="adj5"></td> </tr>
		<tr> <th>dative</th> <td id="adj6"></td> <td id="adj7"></td> <td id="adj8"></td> </tr>
		<tr> <th>genitive</th> <td id="adj9"></td> <td id="adj10"></td> <td id="adj11"></td> </tr>
		<tr> <th>plural</th> <th>masculine</th> <th>feminine</th> <th>neuter</th> </tr>
		<tr> <th>nominative</th> <td id="_adj0"></td> <td id="_adj1"></td> <td id="_adj2"></td> </tr>
		<tr> <th>accusative</th> <td id="_adj3"></td> <td id="_adj4"></td> <td id="_adj5"></td> </tr>
		<tr> <th>dative</th> <td id="_adj6"></td> <td id="_adj7"></td> <td id="_adj8"></td> </tr>
		<tr> <th>genitive</th> <td id="_adj9"></td> <td id="_adj10"></td> <td id="_adj11"></td> </tr>
	</tbody></table>`,

	personal_pronouns: `<table id="adjective_declension" class="pfont"><tbody>
		<tr> <th id="adjective_top" colspan="7">personal pronouns</th> </tr>
		<tr> <th>singular</th> <th>1st</th> <th>2nd</th> <th>3rd masc</th> <th>3rd fem</th> <th>3rd neu</th> <th>reflexive</th> </tr>
		<tr> <th>nominative</th> <td>jek</td> <td>þú</td> <td>hann</td> <td>hon</td> <td>þat</td> <td>sú (rare)</td> </tr>
		<tr> <th>accusative</th> <td>mek</td> <td>þek</td> <td>hann</td> <td>hana</td> <td>þat</td> <td>sek</td> </tr>
		<tr> <th>dative</th> <td>mer</td> <td>þer</td> <td>hanum</td> <td>henni</td> <td>því</td> <td>ser</td> </tr>
		<tr> <th>genitive</th> <td>mín</td> <td>þín</td> <td>hans</td> <td>hannar</td> <td>þess</td> <td>sín</td> </tr>
		<tr> <th>plural</th> <th>1st</th> <th>2nd</th> <th>3rd masc</th> <th>3rd fem</th> <th>3rd neu</th> <th>reflexive</th> </tr>
		<tr> <th>nominative</th> <td>vit</td> <td>þit</td> <td>þeir</td> <td>þær</td> <td>þey</td> <td>seir (rare)</td> </tr>
		<tr> <th>accusative</th> <td>oss</td> <td>yðr</td> <td>þá</td> <td>þær</td> <td>þey</td> <td>sá</td> </tr>
		<tr> <th>dative</th> <td>oss</td> <td>yðr</td> <td>þeim</td> <td>þeim</td> <td>þeim</td> <td>seim</td> </tr>
		<tr> <th>genitive</th> <td>okka</td> <td>ykka</td> <td>þeira</td> <td>þeira</td> <td>þeira</td> <td>seira</td> </tr>
	</tbody></table>`,
};
