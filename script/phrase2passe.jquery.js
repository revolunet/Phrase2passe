﻿/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.jquery.js 2017- 01 - 03
 * 
 * Password Cnil is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Password Cnil is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Password Cnil.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The plugin is used to help the user at choice a password
 * 
 * to example of using :
 * <p>
 *   <script type="text/javascript">
 *     $(document).ready(function () {
 *        $(".passwordBloc").phrase2Passe();
 *     });
 *   </script>
 * </p>
 * 
 * @author Olivier PASQUET
 */
(function ($) {
    /**
     * Initalisation of plugin
     *
     * @method phrase2Passe
	 * @param options
     * @chainable
	 */
    $.fn.phrase2Passe = function (options) {
        var defaults = {
            // HTML Element
            rootHtmlElementSelector: '#passwordBloc',
            headerTypeSelector: "h3",
            contentTypeSelector: ".contentElement",
            sentenceInputSelector: "#sentenceInput",
            phraseValidateSelector: ".sentenceValidate",
            checkImage: "#checkImage",
            listMotTransformer: ".listMotTransformer",
            ckeckImgRule: ".ckeckImgRule",
            phraseSaisi: ".phraseSaisi",
            notUsedTransformer: ".notUsedTransformer",
            warningrule: ".warningrule",
            ruleSelector: ".rule",
            language: "fr",

            // Bean name class typescript
            validatorForNextStep: [
                ["NumberOfChararcterInPassWordValidatorRule", ".rule1"],
                ["PresenceLetterMajusculeValidatorRule", ".rule2"],
                ["ContainsCaracterSpecialValidatorRule", ".rule4"],
                ["NumberDifferentValidatorValidatorRule", ".rule7"]
            ],
            validatorForWarningCurrentStep: [
                ["PresenceLetterMinisculeValidatorRule", ".rule3"],
                ["YearValidatorValidatorRule", ".rule5"],
                ["SuiteOfNumberValidatorRule", ".rule6"],
                ["AnyFourSequentialLetterInTheAlphabetValidatorRule", ".rule8"],
                ["AnyFourSequentialLettersInTheKeyBordValidatorRule", ".rule9"],
                ["IdenticalChararcterInPassWordValidatorRule", ".ruleCountIdenticalChar"]
            ],
            transformers: [
                ["FirstLetterWordTransFormer", 0],
                ["SpaceTransformer", 0],
                ["ReplaceWordBycharcterInPassWordTransFormer", 1, ".conversionWordInCaracterTransformerNotUsed"],
                ["ConversioNnumberTransformer", 1, ".conversionNumberTransformerNotUsed"],
                ["FirstLetterWordTransFormer", 1],
                ["SpaceTransformer", 1]
            ],
            nextLibelleButton: [
                ["Générer votre mot de passe", 0],
                ["Renforcer votre smot de passe", 1]
            ],
            previousLibelleButton: [
                ["Retour", 1],
                ["Retour", 2]
            ],
            cssRootPluginSelector: "wizard"
        };
        $.extend(defaults, options);
        var clazz = makeidcss();
        $(this).each(function () {
            $(this).addClass(clazz);
        });
        defaults.rootHtmlElementSelector = "." + clazz;
        // Create and run plugin JS
        new Phrase2Passe(defaults);
        return $(this);
    }

    /**
     * Retuns the id
     * 
     * @method makeid
     * @return {string} the id of element
     */
    function makeidcss() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return "class_password_generated_" + text;
    }
})(jQuery);