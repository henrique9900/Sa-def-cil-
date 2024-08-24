<?php
header('Content-Type: application/json');

$tips = [
    "Beba bastante água todos os dias.",
    "Faça exercícios regularmente.",
    "Tenha uma alimentação equilibrada.",
    "Visite seu médico regularmente.",
    "Durma bem todas as noites."
];

echo json_encode(['tips' => $tips]);
