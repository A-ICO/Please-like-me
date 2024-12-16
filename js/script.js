$(document).ready(function() {
    // Sélectionner l'élément contenant la main et le texte
    $(".like-container").click(function() {
        // Récupérer l'icône de la main et le texte
        var likeIcon = $(this).find(".like-icon");
        var likeText = $(this).find(".like-text");

        // Vérifier si la main est déjà colorée (le data-liked est "true")
        if (likeIcon.data("liked") === true) {
            // Si elle est colorée, remettre l'image à blanche et réinitialiser le texte
            likeIcon.attr("src", "img/miniature_unlike.png");
            likeText.text("J'aime").css("color", "black");
            likeIcon.data("liked", false);
        } else {
            // Si elle est blanche, la colorier en bleu et changer le texte
            likeIcon.attr("src", "img/miniature_like.png");
            likeText.text("J'aime").css("color","blue");
            likeIcon.data("liked", true);
        }
    });
});